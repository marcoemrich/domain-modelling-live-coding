// Tactical Design Pattern and idioms: Outside-In

// Model with Abstract Types

type CalcRealEstate = (customer: customer) => RealEstateValue;

type RealEstateValue = Money;
type Money = unknown;

type customer = {
  name: Name;
  buildingsList: Building[];
};

type Building = unknown;
type Name = unknown;
