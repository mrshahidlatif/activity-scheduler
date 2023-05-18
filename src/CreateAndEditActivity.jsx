import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

const CreateAndEditActivity = ({ open, onClose, onSave, activity }) => {
    const [user, setUser] = useState(activity?.user || "");
    const [type, setType] = useState(activity?.type || "");
    const [datetime, setDatetime] = useState(activity?.datetime || "");
    const [pitchId, setPitchId] = useState(activity?.pitchId || "");

    const handleSave = () => {
        const updatedActivity = { ...activity, user, type, datetime, pitchId };
        onSave(updatedActivity);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{activity ? "Edit Activity" : "Create Activity"}</DialogTitle>
            <DialogContent>
                <input
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="User"
                />
                <input
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    placeholder="Type"
                />
                <input
                    type="text"
                    value={datetime}
                    onChange={(e) => setDatetime(e.target.value)}
                    placeholder="Datetime"
                />
                <input
                    type="text"
                    value={pitchId}
                    onChange={(e) => setPitchId(e.target.value)}
                    placeholder="Pitch ID"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSave}>{activity ? "Update" : "Save"}</Button>
                <Button onClick={onClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateAndEditActivity;
