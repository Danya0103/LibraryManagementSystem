using System;
using System.Windows.Forms;

namespace IngaExam2_0
{
    public partial class BookForm : Form
    {
        public int BookId { get; private set; }
        public string BookTitle => txtTitle.Text.Trim();
        public string Author => txtAuthor.Text.Trim();
        public int Year
        {
            get
            {
                int y;
                int.TryParse(txtYear.Text.Trim(), out y);
                return y;
            }
        }
        public string ISBN => txtISBN.Text.Trim();

        // Конструктор для добавления книги
        public BookForm()
        {
            InitializeComponent();
            this.Text = "Додати книгу";
        }

        // Конструктор для редагування книги
        public BookForm(int bookId, string title, string author, int year, string isbn) : this()
        {
            BookId = bookId;
            txtTitle.Text = title;
            txtAuthor.Text = author;
            txtYear.Text = year.ToString();
            txtISBN.Text = isbn;
            this.Text = "Редагувати книгу";
        }

        private void btnSave_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(txtTitle.Text) ||
                string.IsNullOrEmpty(txtAuthor.Text) ||
                string.IsNullOrEmpty(txtYear.Text) ||
                string.IsNullOrEmpty(txtISBN.Text))
            {
                MessageBox.Show("Всі поля повинні бути заповнені!");
                return;
            }
            if (!int.TryParse(txtYear.Text, out _))
            {
                MessageBox.Show("Невірний формат року!");
                return;
            }
            this.DialogResult = DialogResult.OK;
            this.Close();
        }

        private void btnCancel_Click(object sender, EventArgs e)
        {
            this.DialogResult = DialogResult.Cancel;
            this.Close();
        }

        private void BookForm_Load(object sender, EventArgs e)
        {

        }
    }
}
