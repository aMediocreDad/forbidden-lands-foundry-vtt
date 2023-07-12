export class FBLActorData extends foundry.abstract.DataModel {
	static _enableV10Validation = true;
	static defineSchema() {
		const fields = foundry.data.fields;
		return {
			biography: new fields.HTMLField(),
			health: new fields.SchemaField({
				value: new fields.NumberField({
					required: true,
					initial: 10,
				}),
				min: new fields.NumberField({
					required: true,
					initial: 0,
				}),
				max: new fields.NumberField({
					required: true,
					initial: 10,
				}),
			}),
			proficiencies: new fields.SchemaField({
				weapons: new fields.ArrayField(new fields.StringField()),
				skills: new fields.ArrayField(new fields.StringField()),
			}),
		};
	}
}
