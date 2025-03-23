import { useState, useEffect } from "react";
import moment from "moment";
import image from "./cat.jpg";
import "./egyutt.scss";

const Egyutt = () => {
	const [daysElapsed, setDaysElapsed] = useState(0);

	useEffect(() => {
		const updateDays = () => {
			const startDate = moment("2025-03-15");
			setDaysElapsed(moment().diff(startDate, "days"));
		};

		updateDays();
		const interval = setInterval(updateDays, 1000 * 60 * 60);
		return () => clearInterval(interval);
	}, []);

	return <div className="egyutt">
        <div className="days">{`ma ${daysElapsed} napja együtt`}</div>
        <img src={image}/>
    </div>;
};

export default Egyutt;
