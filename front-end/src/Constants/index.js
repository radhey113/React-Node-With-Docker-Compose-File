// URL constants
// const BaseURL = 'http://13.232.17.77:8080/';
let BaseURL = 'http://127.0.0.1:8080/';
export const ManagerNamesURL = BaseURL +'am_names'; //Post role: demand/supply
export const DemandDataURL = BaseURL + 'demand'; //Post am_id
export const SupplyDataURL = BaseURL + 'supply'; //Post am_id
export const UpdateDataURL = BaseURL + 'update_demand_supply'; //Post type: 1 for supply/2 for demand, am_name_id, ids_array
export const saveDemand = BaseURL + 'addDemand'; //Post type: 1 for supply/2 for demand, am_name_id, ids_array
export const saveSupply = BaseURL + 'addSupply'; //Post type: 1 for supply/2 for demand, am_name_id, ids_array
export const AM_ID_FOR_REMOVAL = '13';



if(process.env.NODE_ENV === 'production'){

    console.log("Production port...");
    BaseURL = 'http://13.232.17.77:8081/';
}else{
    console.log("Development or local port...");
    BaseURL = 'http://13.232.17.77:8080/';
}

// Other constants
export const TabNames = {
    demand: 'demand',
    supply: 'supply'
};

export const DataTypes = {
    assigned: 'Assigned',
    available: 'Available'
};

export const LoaderColors = {
    red: 'red',
    green: 'green',
    black: 'black',
    primary: 'primary'
};