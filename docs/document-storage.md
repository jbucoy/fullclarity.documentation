# Source Document Storage
[[toc]]
## Module Requirements
A number of standard NetSuite modules are required in order to successfully install FullClarity Storage. These NetSuite settings are available by selecting “Setup”, “Company”, “Enable Features”.

- SuiteCloud Tab
    - Custom Records
    - Server Suitescript
    - Token Based Authentication

In addition to the NetSuite features, the FullClarity Portal SuiteApp must be installed prior to the FullClarity Storage SuiteApp. For more information about installing and configuring the FullClarity Portal, please see [Portal Utility App](/utility-apps/portal/).

## Installation & Configuration
### Deployment
The SuiteApp should be installed via the SuiteApp Control center.  The deployment process will install all files and objects contained in the suiteapp.

### Configure Permissions
Specific permissions are required to view or edit the Source Document field. A full description of these permissions is available at https://help.fullclarity.com/documentation/file-storage/defining-permissions.

### Modify Forms
When the Storage SuiteApp is installed, a custom field is automatically added to the “Custom” tab on transactions. To use the functionality, the transaction form needs to be edited to place the custom field on the main body of the form. Follow these instructions:

1. Identify the form being used to edit the record, and edit it
2. Click the “Move Elements Between Subtabs” button
3. Select the “Custom” tab, and locate the field labeled “FC Source Document”
4. Change the “Subtab” option for the “FC Source Document” field to “Main”
5. Click the “Save” button. This returns the user to the “Edit Custom Form” screen
6. Select the “Screen Fields” tab, and locate the field labeled “FC Source Document”
7. Change the label and position of the field as required, but do not change the “Display Type”
8. Click “Save” to save the customised form.

You should now see a field “Source Document” on the main body of the record.

## Defining Permissions
Typically, FullClarity Storage will be utilized by users undergoing their normal day to day functions within NetSuite. This requires the NetSuite Admins to provide user roles with specific permissions in order to use the Storage functionality, or just as important, to prevent them from using it.

The following guide shows the various permissions required to be assigned to user roles so that Storage data can be adequately secured.

### Permission Sets
#### Prevent Access
To prevent all access to the Storage functionality, ensure that no permissions are granted to the custom record FC Storage Files (custrecord_fc_st_files).

#### View Only Access
In addition to the appropriate access to the record where the documents are being stored, the following permissions are requried:

| Group        | Item                     | Permission Value | Notes                                        |
|--------------|--------------------------|------------------|----------------------------------------------|
|Transactions  |Find Transaction          |View              |Requires VIEW as a minimum - but may be higher|
|Custom Record |FC Portal Storage Region  |View              |Users should **NEVER** be given higher than VIEW access to this record|
|Custom Record |FC Storage Files          |View              |                                              |
|Custom Record |FC Storage Files Versions |View              |                                              |

#### Read and Write Access
In addition to the appropriate access to the transaction record where the documents are being stored, the following permissions are requried:

| Group        | Item                     | Permission Value | Notes                                        |
|--------------|--------------------------|------------------|----------------------------------------------|
|Transactions  |Find Transaction          |View              |Requires VIEW as a minimum - but may be higher|
|Custom Record |FC Portal Storage Region  |View              |Users should **NEVER** be given higher than VIEW access to this record|
|Custom Record |FC Storage Files          |Edit or Full      |                                              |
|Custom Record |FC Storage Files Versions |Edit or Full      |                                              |

## Record Types
The Source Document SuiteApp is designed to be used on almost any NetSuite record. That said, Version 2019.2 only includes a small number of records, which are listed below. Version 2020.1 will have a much larger number of record types.

### Available Record Types
The following record types will work with this SuiteApp:

- Transactions
    - Cash Refund
    - Credit Card Charge
    - Vendor Bill
- Opportunity
