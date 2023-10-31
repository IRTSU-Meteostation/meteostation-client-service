import React, { useState } from "react";
import { YMaps, Map, Placemark, Polygon } from "react-yandex-maps";
import "./HomePage.css";

export const HomePage: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className='container'>
			<div className='header'>Иконка с пользователем</div>
			<div className='sideTab'>
				<button onClick={() => setMenuOpen(!menuOpen)} className='menuButton'>
					Кнопка иконка
				</button>
			</div>
			{menuOpen && <div className='sideMenu'>Содержимое меню</div>}
			<div className='mapContainer'>
				<YMaps>
					<Map
						defaultState={{ center: [47.2168, 38.9198], zoom: 9 }}
						width='100%'
						height='100%'>
						<Placemark geometry={[47.2168, 38.9198]} />
						<Polygon
							geometry={[
								[
									[47.2168, 38.9198],
									[47.3, 39.0],
								],
							]}
							fill='#FF0000'
						/>
					</Map>
				</YMaps>
			</div>
		</div>
	);
};
