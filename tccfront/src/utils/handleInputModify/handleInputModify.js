export const handleInputModify = (e, step, setForm, form, setImagePreview) => {
  const { name, value, files } = e.target;

  if (name === "image" && files && files.length > 0) {
    const file = files[0];
    setForm((prev) => ({ ...prev, image: file }));
    setImagePreview(URL.createObjectURL(file));
  } else if (name === "image" && (!files || files.length === 0)) {
    setForm((prev) => ({ ...prev, image: '' }));
    setImagePreview('');
  } else if (step === 0) {
 
    setForm((prev) => ({ ...prev, [name]: value }));
  } else {

    setForm((prev) => {
      const activities = [...prev.activities];
      activities[step - 1] = { ...activities[step - 1], [name]: value };
      return { ...prev, activities };
    });
  }
};