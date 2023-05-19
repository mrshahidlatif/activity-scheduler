import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const CreateAndEditActivity = ({ open, onClose, onSave, activity, activities }) => {
    const [user, setUser] = useState("");
    const [type, setType] = useState("");
    const [datetime, setDatetime] = useState("");
    const [pitchId, setPitchId] = useState("");

    useEffect(() => {
        if (activity) {
            setUser(activity.user);
            setType(activity.type);
            setDatetime(activity.datetime);
            setPitchId(activity.pitchId);
        } else {
            setUser("");
            setType("");
            setDatetime("");
            setPitchId("");
        }
    }, [activity]);

    const handleSave = () => {
        const existingActivity = activities.find(
            (act) => act.pitchId === pitchId && act.datetime === datetime && act.id !== activity?.id
        );
        if (existingActivity) {
            alert("Cannot schedule two activities on the same pitch at the same time");
            return;
        }
        const updatedActivity = {
            id: activity ? activity.id : null,
            user,
            type,
            datetime,
            pitchId,
        };
        onSave(updatedActivity);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{activity ? "Edit Activity" : "Create Activity"}</DialogTitle>
            <DialogContent>
                <Stack spacing={2} sx={{ m: 1 }}>
                    <TextField
                        label="User"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <TextField
                        label="Type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                    <TextField
                        label="Datetime"
                        value={datetime}
                        type="datetime-local"
                        onChange={(e) => setDatetime(e.target.value)}
                    />
                    <TextField
                        label="Pitch ID"
                        value={pitchId}
                        onChange={(e) => setPitchId(e.target.value)}
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSave}>{activity ? "Update" : "Save"}</Button>
                <Button onClick={onClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateAndEditActivity;
