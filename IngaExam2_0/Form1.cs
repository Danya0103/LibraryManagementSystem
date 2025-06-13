using System;
using System.Data;
using System.Security.Cryptography;
using System.Text;
using System.Windows.Forms;

namespace IngaExam2_0
{
    public partial class Form1 : Form
    {
        // Властивості для передачі даних про користувача до головного вікна
        public string CurrentUsername { get; private set; }
        public string CurrentRole { get; private set; }

        public Form1()
        {
            InitializeComponent();
        }

        private void buttonLogin_Click(object sender, EventArgs e)
        {
            string login = txtLogin.Text.Trim();
            string password = txtPassword.Text;
            string hashedPassword = HashPassword(password);

            // Отримання даних користувача з бази
            DataRow user = DatabaseHelper.GetUserByLogin(login);
            if (user != null && user["HashedPassword"].ToString() == hashedPassword)
            {
                labelMessage.Visible = false;
                MessageBox.Show("Login successful ^^");
                CurrentUsername = login;
                CurrentRole = user["Role"].ToString();
                this.DialogResult = DialogResult.OK;
                this.Close();
            }
            else
            {
                labelMessage.Text = "!Login or password is incorrect!";
                labelMessage.Visible = true;
            }
        }

        private string HashPassword(string password)
        {
            using (SHA256 sha256 = SHA256.Create())
            {
                byte[] bytes = Encoding.UTF8.GetBytes(password);
                byte[] hashBytes = sha256.ComputeHash(bytes);
                return BitConverter.ToString(hashBytes).Replace("-", "").ToLower();
            }
        }

        private void buttonRegister_Click(object sender, EventArgs e)
        {
            // Відкриття форми реєстрації
            RegisterForm regForm = new RegisterForm();
            regForm.ShowDialog();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
    }
}
