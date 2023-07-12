import { attributeTemplate } from "./templates.mixin";

export class AttributesSchema extends foundry.abstract.DataModel {
	static _enableV10Validation = true;
	static defineSchema() {
		const fields = foundry.data.fields;
		return {
			strength: new fields.SchemaField(
				attributeTemplate({
					label: "ATTRIBUTE.STRENGTH",
					includeMax: true,
				}),
			),
			agility: new fields.SchemaField(
				attributeTemplate({
					label: "ATTRIBUTE.AGILITY",
					includeMax: true,
				}),
			),
			wits: new fields.SchemaField(
				attributeTemplate({
					label: "ATTRIBUTE.WITS",
					includeMax: true,
				}),
			),
			empathy: new fields.SchemaField(
				attributeTemplate({
					label: "ATTRIBUTE.EMPATHY",
					includeMax: true,
				}),
			),
			health: new fields.SchemaField(
				attributeTemplate({
					label: "ATTRIBUTE.HEALTH",
					includeMax: true,
				}),
			),
			resolve: new fields.SchemaField(
				attributeTemplate({
					label: "ATTRIBUTE.RESOLVE",
					includeMax: true,
				}),
			),
		};
	}
}
