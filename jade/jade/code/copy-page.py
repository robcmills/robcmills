def copy_model(model, attrs={}):
    model.pk = None
    model.id = None
    model.save()
    for attr in attrs:
        setattr(model, attr, attrs[attr])
    model.save()
    return model


def copy_page(page, parent=None, attrs={}):
    '''copy page, children, and all related models recursively
       and set provided attributes'''
    content_model = page.get_content_model()
    children = page.children.all()
    all_related = content_model._meta.get_all_related_objects()
    # method is recursive, handle children separately
    related_objects = [
        r for r in all_related if r.get_accessor_name() != 'children']
    related_models = []
    for related_object in related_objects:
        related_manager = getattr(
            content_model, related_object.get_accessor_name())
        for related_model in related_manager.all():
            related_models.append({
                'field_name': related_object.field.name, 
                'model': related_model 
            })

    page_copy = copy_model(content_model, attrs)
    page_copy.set_parent(parent)
    page_copy.save()

    for r in related_models:
        attrs_copy = copy(attrs)
        attrs_copy.update({r['field_name']: page_copy})
        copy_model(r['model'], attrs_copy)

    for child in children:
        copy_page(child, page_copy, attrs)


## create eu site object
eu_site = Site(domain='thegogame.eu', name='The Go Game Europe')
eu_site.save()

# ensure current site is us
us_site = Site.objects.get(domain='thegogame.com')
settings.SITE_ID = us_site.id

## copy all root pages recursively and assign to eu site
root_pages = Page.objects.filter(parent=None)
for page in root_pages:
    copy_page(page, None, {'site': eu_site})