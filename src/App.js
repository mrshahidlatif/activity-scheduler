import React, { useState } from "react";
import Activities from "./Activities";
import CreateAndEditActivity from "./CreateAndEditActivity";
import axios from "axios";

const App = () => {
    const [activities, setActivities] = useState([
        {
            id: 1,
            user: "John Doe",
            type: "Meeting",
            datetime: "2023-05-18 10:00",
            pitchId: "ABC123",
        },
        {
            id: 2,
            user: "Jane Smith",
            type: "Training",
            datetime: "2023-05-18 14:30",
            pitchId: "DEF456",
        },
        {
            id: 3,
            user: "Mark Johnson",
            type: "Match",
            datetime: "2023-05-19 18:00",
            pitchId: "GHI789",
        },
        {
            id: 4,
            user: "Sarah Davis",
            type: "Practice",
            datetime: "2023-05-20 09:00",
            pitchId: "JKL012",
        },
        {
            id: 5,
            user: "Michael Brown",
            type: "Tournament",
            datetime: "2023-05-21 13:00",
            pitchId: "MNO345",
        },
    ]);
    const [open, setOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);

    const handleEdit = (activity) => {
        setSelectedActivity(activity);
        setOpen(true);
    };

    const handleDelete = (activityId) => {
        setActivities(activities.filter((activity) => activity.id !== activityId));
    };

    const handleSave = (updatedActivity) => {
        if (selectedActivity) {
            setActivities(
                activities.map((activity) =>
                    activity.id === selectedActivity.id ? updatedActivity : activity
                )
            );
        } else {
            setActivities([...activities, { ...updatedActivity, id: Date.now() }]);
        }
    };

    return (
        <div>
            <h1>Activity App</h1>
            <Activities activities={activities} onEdit={handleEdit} onDelete={handleDelete} />
            <button onClick={() => setOpen(true)}>Add New Activity</button>
            <CreateAndEditActivity
                open={open}
                onClose={() => setOpen(false)}
                onSave={handleSave}
                activity={selectedActivity}
            />
        </div>
    );
};

export default App;
