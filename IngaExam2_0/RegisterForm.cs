using System;
using System.Security.Cryptography;
using System.Text;
using System.Windows.Forms;

namespace IngaExam2_0
{
    public partial class RegisterForm : Form
    {
        public RegisterForm()
        {
            InitializeComponent();
        }

        private void buttonRegister_Click(object sender, EventArgs e)
        {
            string login = txtLogin.Text.Trim();
            string password1 = txtPassword1.Text;
            string password2 = txtPassword2.Text;
            string role = "";
            bool isValidInfo = true;
            HideErrors();

            if (password1.Length < 8)
            {
                errorPassword1.Text = "!Password must contain at least 8 characters!";
                errorPassword1.Visible = true;
                isValidInfo = false;
            }
            if (password1 != password2)
            {
                errorPassword2.Text = "!The passwords do not match!";
                errorPassword2.Visible = true;
                isValidInfo = false;
            }
            if (login.Length < 5)
            {
                errorLogin.Text = "!Login must contain at least 5 characters!";
                errorLogin.Visible = true;
                isValidInfo = false;
            }
            if (rbAdmin.Checked)
            {
                role = "Admin";
                errorRole.Visible = false;
            }
            else if (rbUser.Checked)
            {
                role = "User";
                errorRole.Visible = false;
            }
            else
            {
                errorRole.Text = "Please choose a role.";
                errorRole.Visible = true;
                isValidInfo = false;
            }
            if (isValidInfo)
            {
                string hashedPassword = HashPassword(password1);
                bool success = DatabaseHelper.RegisterUser(login, hashedPassword, role);
                if (success)
                {
                    MessageBox.Show("Registration was successful.");
                }
                else
                {
                    MessageBox.Show("A user with this login already exists.");
                }
            }
        }
        private void RegisterForm_Load(object sender, EventArgs e)
        {
            // Можна виконати ініціалізацію, або залишити порожнім.
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

        private void HideErrors()
        {
            errorLogin.Visible = false;
            errorPassword1.Visible = false;
            errorPassword2.Visible = false;
            errorRole.Visible = false;
        }
    }
}
