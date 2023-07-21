module.exports = {
    // 对应类型的在CHANGELOG.md的展示
	'types': [
		{ 'type': 'feat', 'section': '✨ Features | 新功能' },
		{ 'type': 'fix', 'section': '🐛 Bug Fixes | Bug 修复' },
		{ 'type': 'docs', 'section': '✏️ Documentation | 文档' },
		{ 'type': 'style', 'section': '💄 Styles | 风格' },
		{ 'type': 'init', 'section': '🎉 Init | 初始化' },
		{ 'type': 'refactor', 'section': '♻️ Code Refactoring | 代码重构' },
		{ 'type': 'perf', 'section': '⚡ Performance Improvements | 性能优化' },
		{ 'type': 'test', 'section': '✅ Tests | 测试' },
		{ 'type': 'revert', 'section': '⏪ Revert | 回退', 'hidden': true },
		{ 'type': 'build', 'section': '📦‍ Build System | 打包构建' },
		{ 'type': 'chore', 'section': '🚀 Chore | 构建/工程依赖/工具' },
		{ 'type': 'ci', 'section': '👷 Continuous Integration | CI 配置' },
	],
	// 确定哪些文件中应该更新版本号
	"bumpFiles": [
        {
          "filename": "package.json",
          "type": "json"
        },
        {
          "filename": "README.md",
          "type": "markdown"
        }
      ],
      // 标签的前缀
      "tagPrefix": "v",
      // CHANGELOG.md的位置
      "changelogFile": "CHANGELOG.md",
      // 提交信息模板
      "commitMessage": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
}
