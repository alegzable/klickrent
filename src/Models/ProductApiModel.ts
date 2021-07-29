type ProductApiModel = {
	groupId: number;
	familyId: number;
	name: string;
	products: {
		groupId: number;
		typeId: number;
		name: string;
	}[];
};

export default ProductApiModel;
