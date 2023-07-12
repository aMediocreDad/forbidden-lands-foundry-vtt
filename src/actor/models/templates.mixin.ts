export const attributeTemplate = ({ includeMax = false, hint = "", label = "", maxLabel = "", maxHint = "" }) => {
	const fields = foundry.data.fields;

	const value = new fields.NumberField({
		required: true,
		initial: 0,
		validate: (val: number) => Math.max(0, val),
		label,
		hint,
	});

	if (!includeMax) return { value };

	return {
		value,
		max: new fields.NumberField({
			required: true,
			initial: 0,
			validate: (val: number) => Math.max(0, val),
			label: maxLabel || label,
			hint: maxHint || hint,
		}),
	};
};
