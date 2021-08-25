const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Returns user info'),
	async execute(interaction) {
		await interaction.reply(`User name: ${interaction.user.tag}\nUser ID: ${interaction.user.id}`);
	},
};