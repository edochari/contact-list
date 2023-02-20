#functionality of App

This app allows us to create new contact,update existing contact , delete contact.

#COMPONENTS USED

App - Where main components are added.Inside app we have contact list component.
Contactslist - This component triggers contact and add Contact components
Contact - This component is used to display all the contacts present . This triggers EditContactForm component.
addContact - This componenet is used to add any new contact to list
EditContactForm - This Component is used to update any contact.

Flow of functionality
#To add contact
App -> contactlist -> addContact

#To delete
App -> contactlist -> contact -> contactlist

#To update
App -> contactlist -> contact -> EditContactForm ->contact -> contactlist


