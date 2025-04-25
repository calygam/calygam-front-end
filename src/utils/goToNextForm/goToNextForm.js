export const goToNextForm = (step,setStep,form,setForm) => {
    const activities = [...form.activities];
    if (step > 0 && !activities[step - 1]) {
      activities[step - 1] = { name: '', description: '' };
      setForm({ ...form, activities });
    }
    setStep(step + 1);
  };