

export function getAllNotes(req, res) {
    res.status(200).send('You just fetched the notes');
}
export function createNote(req, res) {
    res.status(201).json({ message: 'Notes created successfully'});
}
export function updateNote(req, res) {
    res.status(200).json({ message: 'Notes updated successfully'});
}
export function deleteNote(req, res) {
    res.status(204).json({ message: 'Notes deleted successfully'});
}

