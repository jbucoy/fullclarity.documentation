# Portal
[[toc]]
## Module Requirements
A number of standard NetSuite modules are required in order to successfully install FullClarity Portal. These NetSuite settings are available by selecting “Setup”, “Company”, “Enable Features”.

- SuiteCloud Tab
    - Custom Records
    - Server Suitescript
    - Token Based Authentication
    
## Installation & Configuration
### Deployment
The SuiteApp should be installed via the SuiteApp Control center.  The deployment process will install all files and objects contained in the suiteapp.

### Defining Permissions
#### For Administrators
To be able to register your account with the FullClarity portal, you must have both the **Administrator** role *AND* the **FC Portal Admin** role assigned to your user account.

#### For Users
As this module is a utility module, users do not generally need to access it directly, so no permissions need to be set for this module to function properly.

### Portal Registration
Each NetSuite account needs to have registered with the FullClarity Portal. The registration process is simple, but requires a NetSuite administrator to perform the following steps.

1. Navigate to [https://my.fullclarity.com/register](https://my.fullclarity.com/register).
2. Enter the Company ID. To find your Company ID, go to the Company Information page in NetSuite (Setup, Company, Company Information). The format of your Company ID may be different from how it appears in your NetSuite URL - especially for Sandbox or Development accounts.
3. Enter the NetSuite username and password of a NetSuite administrator
4. Enter the 4 didget single use password from your authentication app. It's best to ensure the app has just refreshed it's code to give the maximum amount of time to authenticate.

That’s it!

The Portal Registration process will register the NetSuite account and add the unique FullClarity API credentials to your NetSuite account. You will receive an email confirming that the registration process has completed. Wait until you’ve received the email, then carry you are ready to Configure the SuiteApp (see below).

Note - you will need to create a set of credentials for EACH NetSuite account, and credentials from one account WILL NOT WORK on another. For example, if you have a sandbox account, you will need to register the sandbox each time you refresh the sandbox as credentials created in the primary account will not operate in the sandbox.

#### Refreshing API Credentials
Account API credentials are hidden from users, so you cant edit them manually. If however you wish to refresh (i.e. replace) your API credentials, simply run the registration process again, and this will completely replace your credentials with a new, helping to ensure that your credentials remain secure. Note - if you do refresh your API credentials, each user will need to log out and log in again as the credentials are stored in the user’s session and the old api credentials (i.e. the ones you just replaced) wont work any more.

### Configure the SuiteApp
After deploying, the SuiteApp should be configured by creating a configuration record. If the NetSuite account is running OneWorld, a configuration record should be created for each subsidiary.

To create a configuration record:

* Select “Setup”, “FullClarity Portal”, “Portal Configuration”, “New”
* Select the subsidiary to be configured, the API address and the location where for any data and document storage is to take place. Note - a different location can be set for each subsidiary.

