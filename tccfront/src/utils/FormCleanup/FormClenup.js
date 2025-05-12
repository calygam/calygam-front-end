export const FormClenup = (setForm,setImagePreview,setStep) => {
    setForm({
        name: '',
        description: '',
        points: '0',
        password: '',
        vacancy:'0',
        image: null,
        activities: [],
    });
    setImagePreview(null);
    setStep(0);
    localStorage.removeItem('trailInProgress');
};