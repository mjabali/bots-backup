# A simple utility to backup Oracle Intelligent Bots

This utility should only be used with Oracle Intelligent Bots running on local Docker images / VMs.
It has not been tested in any other environment.

## Setup

1. First clone this repository and then `cd` into it.

   ```bash
   $ git clone https://github.com/mjabali/bots-backup.git
   $ cd bots-backup
   ```
1. Install the dependencies.

   ```bash
   $ npm install
   ```

1. Make sure your Bots installation is up and running

1. Run the utility with the following command

   ```bash
   $ node index.js
   ```  

Your bots should be backed up to the bots/ folder.

That's it!

## Meta

* No warranty expressed or implied. Software is as is.   
