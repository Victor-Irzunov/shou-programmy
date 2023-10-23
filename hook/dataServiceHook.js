export const useDataService = async (link) => {
	let data;

	switch (link) {
		case 'arenda-samosvala':
			const { obj } = await import('../constants/service/ArendaSamosvalaConst');
			data = obj
			break
	}
	return {
		data
	};
}