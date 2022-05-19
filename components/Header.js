import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import HeaderGrid from './HeaderGrid';

const useStyles = makeStyles((theme) => ({
	header: {
		marginTop: theme.spacing(1),
		gridArea: 'header / span 12',
		display: 'flex',
		alignItems: 'center',
		// backgroundImage: `url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds&psig=AOvVaw1Xx3T6ygKg9yRM3a4-xEBp&ust=1618824756192000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDJ16i-h_ACFQAAAAAdAAAAABAD")`,
	},
	title: {
		gridColumn: '4/ span 5',
		gridRow: 'title',
		color: 'blue',
		fontSize: '32px',
		textAlign: 'center',
		display: 'flex',
		alignItems: 'stretch',
		justifyContent: 'center',
		backgroundColor: 'white',
		opacity: 0.4,
	},
	menu: {
		gridColumn: '1/ span 3',
		gridRow: 'menu',
		marginBottom: theme.spacing(5),
	},
	action: {
		gridColumn: '1/ 12',
		gridRow: 'action',
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
	returnButton: {
		gridColumn: '12 / 12',
		gridRow: 'menu',
		marginBottom: theme.spacing(5),
	},
}));

export default function Header(props) {
	const { children, menu, action, title, returnButton } = props;
	const theme = useTheme();
	const classes = useStyles(theme);
	return (
		<div className={classes.header}>
			<HeaderGrid>
				<Typography className={classes.title} variant="h4" component="h2">
					{children}
				</Typography>
				{menu && (
					<div className={classes.menu}>
						<span> {menu}</span>
					</div>
				)}
				{title && (
					<div className={classes.title}>
						<span> {title}</span>
					</div>
				)}
				{action && (
					<div className={classes.action}>
						<span> {action}</span>
					</div>
				)}
				{returnButton && (
					<div className={classes.returnButton}>
						<span> {returnButton}</span>
					</div>
				)}
			</HeaderGrid>
		</div>
	);
}
