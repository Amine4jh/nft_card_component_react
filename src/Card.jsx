const Card = (props) => {
	return (
		<div className="card">
			<div className="nftImage">
			<img src={props.nftImage} id="nft" />
			<img src="assets/images/icon-view.svg" id="eye" />
			</div>
			<div className="content">
				<h1>{props.title}</h1>
				<p>{props.description}</p>
				<div>
					<span id="value">
						<img src={props.ethImage} />
						<span>{props.value}ETH</span>
					</span>
					<span id="time">
						<img src={props.timeImage} />
						<span>{props.time} days left</span>
					</span>
				</div>
			</div>
			<div className="footer">
				<img src={props.profileImage} />
				<p>Creation of <b>{props.name}</b></p>
			</div>
		</div>
	)
}

export default Card
