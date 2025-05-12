import { FormatCoins } from "../../utils/FormatCoins/FormatCoins.js";

export const handleInputModify = (e, step, setForm, form, setImagePreview) => {
  const { name, value, files } = e.target;

  // ── upload de imagem ─────────────────────────────────────────────────────────
  if (name === "trailImage") {
    if (files?.length) {
      setForm(prev => ({ ...prev, trailImage: files[0] }));
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setForm(prev => ({ ...prev, trailImage: "" }));
      setImagePreview(null);
    }
    return;
  }

  // ── trailPoints com máscara ────────────────────────────────────────────────
  if (name === "trailPoints") {
    const onlyNums  = value.replace(/\D/g, "") || "0";    // força ao menos "0"
    const formatted = FormatCoins(onlyNums);
    setForm(prev => ({ ...prev, trailPoints: formatted }));
    return;
  }

  // ── activityPoints com máscara e sem NaN ───────────────────────────────────
  if (name === "activityPoints") {
    // remove não dígitos, e garante "0" se ficar vazio
    const onlyNums  = value.replace(/\D/g, "") || "0";
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

  // ── vagas ─────────────────────────────────────────────────────────────────
  if (name === "trailVacancy") {
    if (value.length > 2) return;
    setForm(prev => ({ ...prev, trailVacancy: value }));
    return;
  }

  // ── nome da trilha ────────────────────────────────────────────────────────
  if (name === "trailName") {
    if (value.length > 25) return;
    setForm(prev => ({ ...prev, trailName: value }));
    return;
  }

  // ── campos do step 0 ───────────────────────────────────────────────────────
  if (step === 0) {
    setForm(prev => ({ ...prev, [name]: value }));
    return;
  }

  // ── demais campos de atividades (name, description, difficulty) ────────────
  setForm(prev => {
    const activities = [...prev.activities];
    activities[step - 1] = { ...activities[step - 1], [name]: value };
    return { ...prev, activities };
  });
};
