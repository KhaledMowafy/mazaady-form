<h1>Mazaady Dropdown with Next.js</h1>
<p>This project is an implementation of a nested dropdown component using Next.js. It allows users to select options from a dropdown menu, with the ability to fetch nested children options dynamically from an API when available.</p>

<h2>Features</h2>
<ul>
<li>Select options from a dropdown menu.</li>
<li>Fetch nested children options dynamically from an API.</li>
<li>Display nested children options recursively.</li>
<li>Click on submit to view a full table of the selected choices.</li>
</ul>

<h2>Installation</h2>
<h3>Clone the repository:</h3>


<pre><code>git clone https://github.com/your-username/nested-dropdown-nextjs.git</code></pre>

<h2>Navigate to the project directory:</h2>

<pre><code>cd nested-dropdown-nextjs</pre></code>
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm run dev
Open your browser and visit http://localhost:3000 to view the app.

Usage
Select an option from the main dropdown menu.
If the selected option has children, the nested children options will be fetched and displayed in the dropdown.
Selecting a child option with children will trigger the same behavior recursively, allowing for nested dropdowns.
Dependencies
React.js: A JavaScript library for building user interfaces.
Next.js: A React framework for building server-side rendered and static web applications.
Tailwind CSS: A utility-first CSS framework for building responsive web designs quickly.
Contributing
Contributions are welcome! Please feel free to submit issues or pull requests.

License
This project is licensed under the MIT License - see the LICENSE file for details.