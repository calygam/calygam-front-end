export const FormClenup = (setForm, setImagePreview, setStep, storagekey) => {
    setForm({
        trailName: '',
        trailDescription: '',
        trailVacancy: '0',
        trailImage: '',
        activities: [],
    });
    setImagePreview(null);
    setStep(0);
    localStorage.removeItem('trailInProgress');
};