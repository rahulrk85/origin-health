# Origin Health task Rahul Kulkarni(1BM20MD038)

You can start the development server through the following command after downloading the project from zip folder.
```bash
npm i && npm run dev
```

If that doesn't work you can clone the github repo and run the follwoing commands

```bash
git clone https://github.com/rahulrk85/origin-health
cd origin-health
npm i
npm run dev 
```
Then make a file at root directory of the project with name `.env.local` and add the following content to it

```bash
NEXTAUTH_URL=http://localhost:3000/
NEXTAUTH_SECRET=ab3a17ed88d347554a268ac92feb8fe9
```


---

### About project task

- As stated in the task we have 3 pages
    - Login page
    - normal user dashboard page
    - admin user dashboard page
- For login and authentication i am using `next-auth` package.
- Once the user login the login page is not accessible till that user logs out.
- normal or admin dashboard page have restricted access. According to the user input and type while logging in we allow the page to be accessesed.
- For **username** field enter `admin` while login process to access adminDashboard and admin related powers. You can enter `admin123` for **password** field for both admin and normal user login.
- You can enter any name other than `admin` to access the normal user page and powers.
- Normal user can only see the images and rename the labels. i.e; rename the files.
- Admin user can do everything a normal user can do and to that he can upload new images or lables as said in the task description.
- We have all the images stored in `public/images` directory.
- The sorting of the images is happening in ascending order of the image file names in lexigraphical order.
