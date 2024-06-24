# Attenuation app

## Development

### Running the app locally
*You need to use a Mac with Xcode installed for this to work*

#### Step 1: Install packages
```shell
npm install
```

#### Step 2: Prebuild the project
```shell
npm run prebuild
```

You can also do a clean prebuild
```shell
npm run prebuild -- --clean
```

#### Step 3: Run the project on an iOS simulator
```shell
npm run ios
```

You can also select device to run it on. Your physical devices will show up if connected.
```shell
npm run ios -- --device
```

#### Troubleshooting
expo has a tool called `expo-doctor` that can help you troubleshoot issues in the project. To use it, run:
```shell
npm run doctor
```

Doing a *clean* prebuild will often solve issues.

#### Further information
More information about expo-cli can be found [here](https://docs.expo.dev/more/expo-cli/)

### Contributing

This repository uses [Release Please](https://github.com/googleapis/release-please) to handle changelog and versioning. Release Please requires you to use [Conventional Commit messages](https://www.conventionalcommits.org/). All commits to main with the prefixes `fix:` and `feat:` are considered releasable commits. We have Github actions set up to make sure you follow the convention when creating a PR.

PRs need to be approved by at least one other person. It's not possible to commit directly to `main`.

### Release

Once you are ready to release a new version of the app, merge Release Please's PR in order to update version number and update the changelog.