import React from 'react';
import { createUseStyles } from 'react-jss';
import cn from 'classnames';

const useStyles = createUseStyles({
	tabs: {
		background: 'dimgray',
		display: 'flex',
		justifyContent: 'center',
	},
	tab: {
		alignItems: 'center',
		background: 'black',
		color: 'white',
		cursor: 'pointer',
		display: 'flex',
		justifyContent: 'center',
		padding: '1em',
		'&:hover, &:focus': {
			background: 'dimgray',
		},
	},
	activeTab: {
		background: 'white',
		color: 'black',
		'&:hover, &:focus': {
			background: 'white',
		},
	},
});

export default function Tabs({ activeTab, setActiveTab }) {
	const c = useStyles();
	const introClassName = cn(c.tab, { [c.activeTab]: activeTab === 'intro' });
	const skillsClassName = cn(c.tab, { [c.activeTab]: activeTab === 'skills' });
	const moreClassName = cn(c.tab, { [c.activeTab]: activeTab === 'more' });

	const handleClickIntro = () => setActiveTab('intro');
	const handleClickSkills = () => setActiveTab('skills');
	const handleClickMore = () => setActiveTab('more');

  return (
    <div className={c.tabs}>
    	<div className={introClassName} onClick={handleClickIntro}>intro</div>
    	<div className={skillsClassName} onClick={handleClickSkills}>skills</div>
    	<div className={moreClassName} onClick={handleClickMore}>more</div>
    </div>
  );
}
