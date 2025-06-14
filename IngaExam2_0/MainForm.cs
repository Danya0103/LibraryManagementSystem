using System;
using System.Windows.Forms;

namespace IngaExam2_0
{
    public partial class MainWindow : Form
    {
        // Збереження поточної ролі і логіну користувача
        public string CurrentRole { get; set; }
        public string CurrentUsername { get; set; }

        // Конструктор приймає дані користувача, отримані з форми авторизації
        public MainWindow(string username, string role)
        {
            InitializeComponent();
            CurrentUsername = username;
            CurrentRole = role;
            lblWelcome.Text = $"Welcome, {username} ({role}) ^^";

            // За замовчуванням завантажуємо головну (домашню) сторінку
            LoadChildForm(new HomePageForm());
        }

        /// Метод для завантаження дочірніх форм у центральну панель.
        private void LoadChildForm(Form childForm)
        {
            panelMain.Controls.Clear();

            childForm.TopLevel = false;
            childForm.FormBorderStyle = FormBorderStyle.None;
            childForm.Dock = DockStyle.Fill;
            panelMain.Controls.Add(childForm);

            childForm.Show();
        }

        // Обробник кнопки "Головна"
        private void btnHome_Click(object sender, EventArgs e)
        {
            LoadChildForm(new HomePageForm());
        }

        // Обробник кнопки "Каталог"
        private void btnCatalog_Click(object sender, EventArgs e)
        {
            try
            {
                if (CurrentRole == "Admin")
                    LoadChildForm(new AdminCatalogForm());
                else
                    LoadChildForm(new UserCatalogForm());
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error loading catalog: " + ex.Message);
            }
        }

        // Обробник кнопки "Вихід" – повертаємося до форми входу
        private void btnLogout_Click(object sender, EventArgs e)
        {
            this.Hide();
            new Form1().Show();
        }

        private void panelMain_Paint(object sender, PaintEventArgs e)
        {

        }
    }
}

//