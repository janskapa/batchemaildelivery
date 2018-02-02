# batchemaildelivery
Batch Email Delivery script for Google Scripts that allows you to set how often do want to receive emails.

You control your emails; emails do not control you.

# Setup

You need to follow these steps in order for the Batch Delivery script to work.

1. Create a folder in your Gmail, called "BatchedInbox"
2. Set "Automatically add messages" to `from * and includes label:inbox`
3. Set "Skip the inbox. When messages arrive, mark them done" to checked

Once this is done, all your messages will go to this folder instead of your "Inbox". 

Afterwards, go to Google Scripts (under the same Google Account as is your email), and copy the script from Code.gs there. 

Once the code is copied, you need to go to Edit - Current project triggers to set how often do you want emails to be delivered. I recommend using "Time-driven" and "Day timer", as often as is appropriate for your work.

Enjoy!
