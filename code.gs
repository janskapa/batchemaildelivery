function batchDeliver() {
  var label = GmailApp.getUserLabelByName("BatchedInbox"); 
  
  // all new emails are skipping the inbox and going to this label 
  // see readme about how to achieve it
  
  var threads = label.getThreads(); // get all the threads with this label
    for (var i = 0; i < threads.length; i++) { // iterate through them
      label.removeFromThread(threads[i]); // remove the label
      threads[i].moveToInbox(); // move them to Inbox
    }
}
