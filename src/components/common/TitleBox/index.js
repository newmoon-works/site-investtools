import React from 'react';
import styles from './TitleBox.module.scss';

export default function TitleBox(props) {
	return (
		<div className={styles.titleBox}>
			<h3 className={props.className}>
				{
					props.children
				}
			</h3>
		</div>
	)
}