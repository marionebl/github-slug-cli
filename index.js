const path = require('path');

const commander = require('commander');
const githubSlug = require('github-slug');

const pkg = require('./package.json');

function slugify(path, remote) {
	return new Promise((resolve, reject) => {
		const args = [
			path,
			remote,
			(err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			}
		].filter(Boolean);

		githubSlug.apply(null, args); // eslint-disable-line prefer-spread
	});
}

function main(argv) {
	commander
		.version(pkg.version)
		.usage('[options] [path]')
		.option('-f, --fail', 'fail if no slug can be determined from [path]', false)
		.option('-r, --remote <remote>', 'git <remote> of project in [path] to get the slug for');

	commander.parse(argv);

	const directory = path.resolve(process.cwd(), commander.args[0] || '.');
	const slugifying = slugify(directory, commander.remote)
		.catch(error => {
			if (commander.fail) {
				throw error;
			}
		});

	return slugifying;
}

main(process.argv)
	.then(message => {
		console.log(message || '');
	})
	.catch(error => {
		setTimeout(() => {
			throw error;
		});
	});
