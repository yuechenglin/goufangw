import React from 'react'

import { Link } from 'react-router'


class New extends React.Component {
	render() {
		return (
			<div className="m-new">
			
				<header className="header">
					<Link to="/board">
						<span></span>
					</Link>
					<img src="./images/xf_index.png"/>
					<input type="text" value="请输入楼盘名或区域" />
				</header>
				
				<section>
					<div>
						<ul>
							<li>
								<Link to="" >
									<img src="./images/all_lp.png"/>
									<b>全部楼盘</b>
								</Link>
							</li>
							<li>
								<Link>
									<img src="./images/recently_opened.png"/>
									<b>近期开盘</b>
								</Link>
							</li>
							<li>
								<Link>
									<img src="./images/discount.png"/>
									<b>优惠楼盘</b>
								</Link>
							</li>
							<li>
								<Link>
									<img src="./images/reserve_price.png"/>
									<b>看低价</b>
								</Link>
							</li>
							</ul>
							<ul>
							<li>
								<Link>
									<img src="./images/purchase_mission.png"/>
									<b>购房团</b>
								</Link>
							</li>
							<li>
								<Link>
									<img src="./images/adviser.png"/>
									<b>房产顾问</b>
								</Link>
							</li>
							<li>
								<Link>
									<img src="./images/development_dynamics.png"/>
									<b>楼盘动态</b>
								</Link>
							</li>
							<li>
								<Link>
									<img src="./images/new_house.png"/>
									<b>特价房</b>
								</Link>
							</li>
						</ul>
					</div>			
				</section>
				
				<nav>
					<ul>
						<li>
							<Link to="" >
								<p>中山</p>
							</Link>
						</li>
						<li class="bor">
							<Link to="" >
								<p>甘井子</p>
							</Link>
						</li>
						<li>
							<Link to="" >
								<p>高新</p>
							</Link>
						</li>
						<li>
							<Link to="" >
								<p>8千-1万</p>
							</Link>
						</li>
						<li class="bor">
							<Link to="" >
								<p>1万-1.5万</p>
							</Link>
						</li>
						<li>
							<Link to="" >
								<p>全部</p>
							</Link>
						</li>
					</ul>
				</nav>

			</div>
		)
	}
}

export default New