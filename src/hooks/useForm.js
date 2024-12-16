import { useState, useEffect } from 'react';

function useForm({ initialValue, validate, formMenu }) {
  const [values, setValues] = useState(initialValue);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [toggles, setToggles] = useState(
    formMenu.map((item) => Array(item.options.length).fill(false))
  );
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChangeInput = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (name) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const getTestInputProps = (name) => {
    const value = values[name];
    const onChange = (event) => handleChangeInput(name, event.target.value);
    const onBlur = () => handleBlur(name);

    return { value, onChange, onBlur };
  };

  const setToggleSelections = (newToggles) => {
    setToggles(newToggles);
  };

  const getSelectedOptions = () => {
    return formMenu.map((menu, menuIdx) => {
      const selectedOptions = toggles[menuIdx]
        .map((selected, optionIdx) =>
          selected ? menu.options[optionIdx] : null
        )
        .filter((option) => option !== null);

      return menu.id === 1 ? selectedOptions[0] || '' : selectedOptions;
    });
  };

  useEffect(() => {
    const newErrors = validate(values);
    setErrors(newErrors);

    const toggleGroupValid = toggles.every((menuToggles) =>
      menuToggles.some((toggle) => toggle)
    );

    setIsFormValid(!newErrors.nickName && !newErrors.age && toggleGroupValid);
  }, [validate, values, toggles]);

  return {
    values,
    errors,
    touched,
    getTestInputProps,
    isFormValid,
    setToggleSelections,
    toggles,
    getSelectedOptions,
  };
}

export default useForm;
