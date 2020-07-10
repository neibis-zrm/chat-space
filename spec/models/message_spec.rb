require 'rails_helper'
describe Message do
  describe '#create' do
    #valid
    context 'can save' do
      it "is valid with a body" do
        message = build(:message, image: nil)
        message.valid?
        expect(message).to be_valid
      end
  
      it "is valid with a image" do
        message = build(:message, body: nil)
        message.valid?
        expect(message).to be_valid
      end
  
      it "is valid with a body and image" do
        message = build(:message)
        message.valid?
        expect(message).to be_valid
      end
    end
    #invalid
    context 'can not save' do
      it "is invalid with a nil-body and nil-image to error body" do
        message = build(:message, body: nil, image: nil)
        message.valid?
        expect(message.errors[:body]).to include('を入力してください')
      end
      it "is invalid with a nil-group_id" do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include('を入力してください')
      end
      it "is invalid with a nil-user_id" do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include('を入力してください')
      end
    end
  end
end