using System;
using System.Data;
using System.Windows.Forms;

namespace IngaExam2_0
{
    public partial class AdminCatalogForm : Form
    {
        public AdminCatalogForm()
        {
            InitializeComponent();
        }

        private void AdminCatalogForm_Load(object sender, EventArgs e)
        {
            LoadBooks();
        }

        private void LoadBooks()
        {
            DataTable dt = DatabaseHelper.GetBooks();
            dgvBooks.DataSource = dt;
        }

        private void btnAdd_Click(object sender, EventArgs e)
        {
            BookForm bookForm = new BookForm();
            if (bookForm.ShowDialog() == DialogResult.OK)
            {
                bool success = DatabaseHelper.InsertBook(bookForm.BookTitle, bookForm.Author, bookForm.Year, bookForm.ISBN);
                if (success)
                    MessageBox.Show("Book was added successfully.");
                else
                    MessageBox.Show("A book with this ISBN already exists!");
                LoadBooks();
            }
        }

        private void btnEdit_Click(object sender, EventArgs e)
        {
            if (dgvBooks.SelectedRows.Count > 0)
            {
                int bookId = Convert.ToInt32(dgvBooks.SelectedRows[0].Cells["BookId"].Value);
                string title = dgvBooks.SelectedRows[0].Cells["Title"].Value.ToString();
                string author = dgvBooks.SelectedRows[0].Cells["Author"].Value.ToString();
                int year = Convert.ToInt32(dgvBooks.SelectedRows[0].Cells["Year"].Value);
                string isbn = dgvBooks.SelectedRows[0].Cells["ISBN"].Value.ToString();

                BookForm bookForm = new BookForm(bookId, title, author, year, isbn);
                if (bookForm.ShowDialog() == DialogResult.OK)
                {
                    bool success = DatabaseHelper.UpdateBook(bookId, bookForm.BookTitle, bookForm.Author, bookForm.Year, bookForm.ISBN);
                    if (success)
                        MessageBox.Show("Book was updated successfully.");
                    else
                        MessageBox.Show("A book with this ISBN already exists!");
                    LoadBooks();
                }
            }
            else
            {
                MessageBox.Show("Choose a book to edit!");
            }
        }

        private void btnDelete_Click(object sender, EventArgs e)
        {
            if (dgvBooks.SelectedRows.Count > 0)
            {
                int bookId = Convert.ToInt32(dgvBooks.SelectedRows[0].Cells["BookId"].Value);
                DialogResult result = MessageBox.Show("Delete book?", "Confirm", MessageBoxButtons.YesNo);
                if (result == DialogResult.Yes)
                {
                    DatabaseHelper.DeleteBook(bookId);
                    LoadBooks();
                }
            }
            else
            {
                MessageBox.Show("Select the book to delete!");
            }
        }
    }
}
