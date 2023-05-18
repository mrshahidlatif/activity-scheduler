import React, { useState, useEffect } from "react";
import Activities from "./Activities";
import CreateAndEditActivity from "./CreateAndEditActivity";
import axios from "axios";

const App = () => {
    const [activities, setActivities] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);

    const handleEdit = (activity) => {
        setSelectedActivity(activity);
        setOpen(true);
    };

    useEffect(() => {
        fetchActivities();
    }, []);

    const fetchActivities = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:5000/activities");
            setActivities(response.data);
        } catch (error) {
            console.error("Error fetching activities:", error);
        }
    };

    // const handleDelete = (activityId) => {
    //     setActivities(activities.filter((activity) => activity.id !== activityId));
    // };
    const handleDelete = async (activityId) => {
        try {
            await axios.delete(`http://127.0.0.1:5000/activities/${activityId}`);
            setActivities((prevActivities) =>
                prevActivities.filter((activity) => activity.id !== activityId)
            );
        } catch (error) {
            console.error("Error deleting activity:", error);
        }
    };

    // const handleSave = (updatedActivity) => {
    //     if (selectedActivity) {
    //         setActivities(
    //             activities.map((activity) =>
    //                 activity.id === selectedActivity.id ? updatedActivity : activity
    //             )
    //         );
    //     } else {
    //         setActivities([...activities, { ...updatedActivity, id: Date.now() }]);
    //     }
    // };
    const handleSave = async (updatedActivity) => {
        try {
            if (selectedActivity) {
                await axios.put(
                    `http://127.0.0.1:5000/activities/${selectedActivity.id}`,
                    updatedActivity
                );
                setActivities((prevActivities) =>
                    prevActivities.map((activity) =>
                        activity.id === selectedActivity.id ? updatedActivity : activity
                    )
                );
            } else {
                await axios.post("http://127.0.0.1:5000/activities", updatedActivity);
                setActivities((prevActivities) => [
                    ...prevActivities,
                    { ...updatedActivity, id: Date.now() },
                ]);
            }
            setSelectedActivity(null);
            setOpen(false);
        } catch (error) {
            console.error("Error saving activity:", error);
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
