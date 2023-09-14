interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Create an account',
    "View the company's tool inventory",
    'Manage rental requests',
    'View rental history',
  ],
  ownerAbilities: ['Manage company profile', 'Add Admins to company', 'Manage tool inventory and rental requests'],
  getQuoteUrl: 'https://app.roq.ai/proposal/ae576fc7-d505-4a61-95e7-94a720fff445',
};
