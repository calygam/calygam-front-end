export const FormClenup = (setForm,setImagePreview,setStep) => {
    setForm({
        name: '',
        description: '',
        price: '',
        password: '',
        image: null,
        activities: [],
    });
    setImagePreview(null);
    setStep(0);
    localStorage.removeItem('trailInProgress');
};