# Typescript in React Native
# Set up Typescript
<h2>STEP 1: Create new project</h2>
<h2>STEP 2: Install necessary dependencies</h2>
<pre>
npm install --save typescript react-native-typescript-transformer
</pre>
<h2>STEP 3: Add typings</h2>
npm install --save @types/react @types/react-native
<h2>Configure react-native-cli</h2>
Create file 'rn-cli.config.js' in root folder:
<pre>
module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx', 'js', 'jsx'];
  }
}
</pre>
