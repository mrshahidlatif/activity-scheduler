import React from "react";
import Activity from "./Activity";

const Activities = ({ activities, onEdit, onDelete }) => {
    return (
        <div>
            {activities.map((activity) => (
                <Activity
                    key={activity.id} // Assuming each activity has a unique id
                    activity={activity}
                    onEdit={() => onEdit(activity)}
                    onDelete={() => onDelete(activity.id)}
                />
            ))}
        </div>
    );
};

export default Activities;
