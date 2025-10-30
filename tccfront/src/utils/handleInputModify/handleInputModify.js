import { UseModalHook } from "../../hooks/UseModalHook/UseModalHook.js";
import { FormatCoins } from "../../utils/FormatCoins/FormatCoins.js";
import { RegexPassword } from "../RegexPassword/RegexPassword.js";

export const handleInputModify = (e, step, setForm, form, setImagePreview, setFormErrors) => {

  const { name, value, files } = e.target;
const MAX_IMAGE_MB = 1;
const MAX_IMAGE_BYTES = MAX_IMAGE_MB * 1024 * 1024;
  if (name === "trailImage") {

    if (files?.length) {
      if (files[0].size >MAX_IMAGE_BYTES){
     setFormErrors(prev => ({ ...prev, trailImage: "Arquivo Deve ser Menor que 1MB" }));
        return
      }
        setForm(prev => ({ ...prev, trailImage: files[0] }));
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setForm(prev => ({ ...prev, trailImage: "" }));
      setImagePreview(null);
    }
    return;
  }

if (name === "trailPassword") {
  setFormErrors(prev => ({ ...prev, trailPassword: RegexPassword(value) }));
  setForm(prev => ({ ...prev, trailPassword: value }));
  return;
}


  if (name === "trailPoints") {
    const onlyNums = value.replace(/\D/g, "") || "0";
    if (onlyNums.length > 6) return
    const formatted = FormatCoins(onlyNums);
    setForm(prev => ({ ...prev, trailPoints: formatted }));
    return;
  }
  if (name === "trailVacancy") {
    const onlyNums = value.replace(/\D/g, "") || "0";
    const numInt = parseInt(onlyNums)
    if (numInt > 999) return
    if (onlyNums.length > 3) return
    const formatted = FormatCoins(onlyNums);
    setForm(prev => ({ ...prev, trailVacancy: formatted }));
    return;
  }


  if (name === "activityPoints") {

    const onlyNums = value.replace(/\D/g, "") || "0";
    const formatted = FormatCoins(onlyNums);

    setForm(prev => {
      const activities = prev.activities.map((act, idx) =>
        idx === step - 1
          ? { ...act, activityPoints: formatted }
          : act
      );
      return { ...prev, activities };
    });
    return;
  }

  if (name === "trailVacancy") {
    if (value.length > 3) return;
    setForm(prev => ({ ...prev, trailVacancy: value }));
    return;
  }

  if (name === "trailName") {
    if (value.length > 30) return;
    
     setFormErrors(prev => ({ ...prev, trailName: value.length>0?"batatonananana":"" }));
     
    setForm(prev => ({ ...prev, trailName: value }));
    return;
  }
  if (name === "trailDescription") {
    if (value.length > 3500) return;
    setForm(prev => ({ ...prev, trailDescription: value }));
    return;
  }

  if (step === 0) {
    setForm(prev => ({ ...prev, [name]: value }));
    return;
  }

  setForm(prev => {
    const activities = [...prev.activities];
    activities[step - 1] = { ...activities[step - 1], [name]: value };
    return { ...prev, activities };
  });





};
