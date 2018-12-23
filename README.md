- Introduce the Project
Online ToDo list web application is a web platform which user can operate and maintain their tasks. the main features are that users can add a new task, delete an existing task, search tasks,  share a task to other account users and update the task’s status. Finally, all data will store in the MYSQL database. 

- Flask framework which I used to develop the online todo list application. Python is applied to develop backend and html applying JavaScript and jQuery to develop the frontend.  The main reason is that, as we know, flask framework is microframework for python based on Werkzeug, Jinja 2  which are libraries. Developers can fast develop a web application. Moreover, the it is loose coupling between database, frond end and backend so as to deploy and maintain the web application easily. As for Database, this project uses MySQL to do CRUD (Create, Read, Updata, Delete) operations.

- Development the Online Todo List web application
There are three main functions which are separated by the status of task list, “To do”, “Doing” and “Done”, and search all the tasks which the current user has. The detail information about GUI and business, please refer to the figures below. 
	a.	Main page, when the user first browser the website, it shows the main page. 
	b.	Sing up page, user cannot do any operation when they do not login. User can register an account by username, email address and password. 
	c.	Sign out/Sign in, user can sign in with user name and password and sign out on the navigation bar directly. Thus, there is no independent page to do the operations. When user click “sign out”, then the username session will be deleted, next time user browser the web page, they have to sign in again.
	d.	Main page with a task list, after sign in the web page, the main page will display on the main functionalities and a task list for current user. There are three main parts,
	
    ***The first part is main functionalities, that is, “To Do Task” that user click button “Add” then will redirect the “Create new task” page. Click button “Setting” under the “To do”,  “Doing Task” and “Done Task”, user can check the task list with the three status tasks directly. “Task List” is one of features to get all tasks with different status.
	 
	***The second part is searching a specific task in the task list, which is straightforward to search any tasks from the current list.
	 
	***The third part is the operation of each task in the task list, that is, delete a task, check the detail information of the selected task, and share a task to others. All the operation user can operate directly in the task list.

	e.	Create a task, starting a  new task lifecycle from creating a task, the main contents are task title (the task title should be unique.) , due date, task description and task comment. After click “submit”, then go back to the task list with “todo” status.
	 
	f.	Read a task by click the “Detail Task” to check and update the selected task in the task list. After click “submit”, then return to the task list as well.

	g.	Delete a task, user can click the button “Delete task” in the task list, then the task will be deleted directly.
	 
	h.	Share one task to specific user, user can share a specific task to a exist user by input people email address or username. Then the person will check the task in their task list.
	 
- Database Design
	a.	Based on the main features,  four tables are designed which are “user”, “todolist” , “map_usertasklist” and “list_status”. 
	
	
	Table 1 is user table, maintain users’ account. USER_ID is the primary key.
	Fields Name	USER_NAME	USER_ID 	ROLE_TYPE	REGRIST_DATE	PASSWORD	EMAIL
	Type	varchar(25)	varchar(20)	varchar(25)	datetime	varchar(225)	varchar(225)

	
	Table 2: table “todolist” all the task will be stored in the table, LIST_ID is the primary key
	Fields Name	LIST_ID	    LIST_CREATETIME	LIST_STATUS	LIST_USERID	LIST_TITLE	    LIST_LOG	LIST_DESCRIPTION	LIST_DUEDATE  LIST_UpdateDate
	Type	    varchar(20)	datetime	    varchar(20)	datetime	varchar(225)	varchar(225)	varchar(255)	datetime	  datetime
	
	
	Table 3: table map_usertasklist, the main functionality is for sharing feature.
	FieldsName	MAP_LISTID	MAP_USERID
	  Type	    varchar(20)	varchar(20)
	  Map_Listid = todolist.List_ID,  Map_Userid = user.userId
	  
	  
	Table 4: table list_status, the main functionality is maintaining the list status when the task status are getting complex, I think the task status maintain table will have developer to maintain and operate the task status.
	Fields Name	STATUS_ID	STATUS_NAME
	Type	    varchar(10)	varchar(10)

	b.	Design of Store Procedures
	There are six store procedures designed to operate todo task list. 

	 No.	Store Procedure Name	Description
	 1	    sp_addnewTask	        Add a new task. 
	 2	    sp_createNewUser	        Register a new user.
	 3	    sp_deleteTask	        Delete a exist task.
	 4	    sp_shareTask	        Share a task to a user.
	 5	    sp_updateTask	        Update the current task.
	 6	    sp_verifyUserAccount	Verify the user when login the website.
