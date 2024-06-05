namespace Shopping_Cart_App.Model
{
    public class Response
    {
        public int StatusCode { get; set; }
        public string? StatusMessage { get; set; }
        public List<Products>? listProducts { get; set; }
    }
}
