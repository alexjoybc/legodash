using System.Threading;
using System.Threading.Tasks;

namespace LegoSearchApi.Product
{
    public interface IProductService
    {
        Task<LegoProduct> Get(int id, CancellationToken cancellationToken);
    }
}