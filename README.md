## Donders Portfolio Template with GitHub Pages Deployment

This guide will show you how to use the provided HTML and CSS portfolio template and deploy it to your personal GitHub Pages website. Even if you have no prior experience with web development, you can follow these steps to create a professional online portfolio.

**What's included?**

* Pre-made HTML (`index.html`) and CSS (`styles.css`) files for a clean and professional portfolio layout.
* Detailed instructions for editing your information and (optionally) customizing the design.
* A step-by-step guide to deploy your portfolio website to GitHub Pages.

**What you'll need:**

* A text editor like Notepad (Windows) or TextEdit (Mac).
* A GitHub account (free to create at [https://github.com/join](https://github.com/join))

**Getting Started:**

1. **Download the files:** Download the `index.html` and `styles.css` files and save them in a folder on your computer.

2. **Create a GitHub repository:**

    * Log in to your GitHub account and click the "+" icon in the top right corner. 
    * Select "New repository".
    * Give your repository a name (e.g., your-username-portfolio) and leave the other options blank. 
    * Click "Create repository".

3. **Open your repository in desktop software (optional):**

    * You can use a desktop Git client like GitHub Desktop ([https://desktop.github.com/](https://desktop.github.com/)) to manage your files. This is optional but can make the process easier.  Download and install the software if you choose to use it.

4. **Prepare your files for upload:**

    * Open the downloaded `index.html` and `styles.css` files in your text editor.

5. **Edit your information:**

    * In `index.html`, look for sections with placeholders like "YOUR_NAME_HERE". Replace these placeholders with your own information.
    * Replace the `avatar.jpg` in the `/images` folder with your own picture. Make sure to match the file type in `index.html`. (e.g. if your file name is johndoe.png you have to update the line on `index.html` as  `<img src="/images/johndoe.png" alt="Your Photo">` ) 
    * Briefly describe your skills, experience, researches and your CV.

* **Tips:** 
    * Keep your bio concise and highlight relevant skills. 
    * Briefly explain researches as Title, name, date and abstract. 
    * To include more researches, copy and paste the section in `research.html`

6. **(Optional) Customize the look:**

    * Open the `styles.css` file. This controls the website's appearance (colors, fonts, etc.). You can make changes here, but it's not required.

7. **Save your changes:**

    * Save both `index.html` and `styles.css` files within your portfolio folder. 

8. **Push your files to GitHub (using command line):**

    * Open a terminal window (Command Prompt on Windows, Terminal on Mac).
    * Navigate to your portfolio folder using the `cd` command (e.g., `cd C:\Users\YourName\Documents\Portfolio`).
    * If you're not familiar with Git commands, you can copy and paste the following lines one by one, pressing Enter after each line:

        ```
        git init
        git add .
        git commit -m "First commit - Your portfolio website"
        ```

        * The first line initializes Git in your folder.
        * The second line adds all your files to be tracked by Git.
        * The third line creates a snapshot of your files with a commit message (replace "Your portfolio website" with your own message).

    * To connect your local repository to your remote GitHub repository, run the following command, replacing `<username>` with your GitHub username and `<repository-name>` with the name of your repository (e.g., `git remote add origin git@github.com:<username>/<repository-name>.git`):

        ```
        git remote add origin git@github.com:<username>/<repository-name>.git
        ```

    * Finally, push your local files to GitHub using:

        ```
        git push -u origin master
        ```

        * This pushes your changes to the `master` branch of your remote repository.

**Using GitHub Desktop (optional):**

   * If you're using GitHub Desktop, you can simply drag and drop your `index.html` and `styles.css` files into the application window. 
   * Then, click the "Commit" button and provide a commit message. 
   * Finally, click "Push origin" to upload your changes to GitHub.

**Viewing your portfolio on GitHub Pages:**

1. Go to your GitHub repository page (e.g., [https://stackoverflow.com/questions/15715825/how-do-you-get-the-git-repositorys-name-in-some-git-repository](https://stackoverflow.com/questions/15715825/how-do-you-get-the-git-repositorys-name-in-some-git-repository)).

2. Click on the "Settings" tab.

3. Under "GitHub Pages", select "Source" and choose the branch you want to publish your website from. By default, GitHub Pages looks for a branch named gh-pages. However, for this template, we will use the master branch.  Select the branch named "master" from the dropdown menu.

4. Click "Save".

5. Congratulations!  Your portfolio website should now be live!  Within a minute or two, you can access it through a URL like this: https://<username>.github.io/ (replace <username> with your actual GitHub username).

**Additional Notes:**

Troubleshooting: If you encounter any issues after saving your settings, it might take a few minutes for GitHub Pages to process your changes. Try waiting a bit and then refreshing the URL.
Keeping your portfolio updated: Any future edits you make to your index.html and styles.css files will need to be uploaded to your GitHub repository again following steps 7 and 8 (or using GitHub Desktop) to update your live portfolio website.

**Further Customization:**

This guide focused on the core functionality of getting your portfolio online. If you're interested in further customization beyond basic HTML and CSS editing, there are many online resources and tutorials available to learn more about web development.