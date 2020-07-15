class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  has_many :user_groups
  has_many :messages
  has_many :groups, through: :user_groups
  validates :name, presence: true, uniqueness: true

  def self.search(input, id)
    return nil unless input  #空の場合の処理
    User.where(['name LIKE ?', "%#{input}%"]).where.not(id: id).limit(10)
  end

end
